package middlewares

import (
	"errors"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v4"
	"github.com/zhuliminl/word_server/helper"
	"github.com/zhuliminl/word_server/module"
)

func JWT(jwtService module.Interface_JWTService) gin.HandlerFunc {
	return func(c *gin.Context) {
		tokenHeader := c.GetHeader("token")

		if tokenHeader == "" {
			response := helper.BuildErrorResponse("token 参数不存在", 401, "请携带的 token 信息", helper.EmptyObj{})
			c.AbortWithStatusJSON(http.StatusUnauthorized, response)
			return
		}

		token, err := jwtService.ValidateToken(tokenHeader)
		if err != nil {
			response := helper.BuildErrorResponse("token 校验失败", 401, err.Error(), helper.EmptyObj{})
			c.AbortWithStatusJSON(http.StatusUnauthorized, response)
			return
		}

		if token.Valid {
			claims := token.Claims.(jwt.MapClaims)
			userId := claims["userId"]
			if userId == "" {
				response := helper.BuildErrorResponse("token 校验失败, token 信息中用户信息为空", 401, "", helper.EmptyObj{})
				c.AbortWithStatusJSON(http.StatusUnauthorized, response)
				return
			}
			c.Set("CurrentUserId", userId)

			log.Println("saul =====>>> Claims:token 解析的结果（用户id）", userId)

			c.Next()
		} else if errors.Is(err, jwt.ErrTokenMalformed) {
			response := helper.BuildErrorResponse("token 校验失败, That's not even a token", 401, err.Error(), helper.EmptyObj{})
			c.AbortWithStatusJSON(http.StatusUnauthorized, response)
			return
		} else if errors.Is(err, jwt.ErrTokenExpired) || errors.Is(err, jwt.ErrTokenNotValidYet) {
			// Token is either expired or not active yet
			response := helper.BuildErrorResponse("token 校验失败, Timing is everything", 401, err.Error(), helper.EmptyObj{})
			c.AbortWithStatusJSON(http.StatusUnauthorized, response)
			return
		} else {
			response := helper.BuildErrorResponse("token 校验失败, Couldn't handle this toke", 401, err.Error(), helper.EmptyObj{})
			c.AbortWithStatusJSON(http.StatusUnauthorized, response)
			return
		}
	}
}
