package module

import (
	"errors"
	"log"

	"github.com/gin-gonic/gin"
	"github.com/zhuliminl/word_server/constError"
	"github.com/zhuliminl/word_server/constant"
)

type Interface_UserController interface {
	GetUserByUserId(c *gin.Context)
	GetMyInfo(c *gin.Context)
}

type userController struct{}

// GetMyInfo
// @Tags      user
// @Summary   获取自己的用户信息
// @Security  ApiKeyAuth
// @accept    application/json
// @Produce   application/json
// @Success   200   {object}  Response{data=User}  "用户信息"
// @Router    /user/getMyInfo [get]
func (u userController) GetMyInfo(c *gin.Context) {
	userId := c.MustGet("CurrentUserId").(string)
	if userId == "" {
		if Error400(c, errors.New(constant.ParamsEmpty)) {
			return
		}
	}
	user, err := UserService.GetUserByUserId(userId)
	if IsConstError(c, err, constError.UserNotFound) {
		return
	}
	if Error500(c, err) {
		return
	}
	SendResponseOk(c, constant.RequestSuccess, user)
}

// GetUserByUserId
// @Tags      user
// @Summary   获取用户信息
// @Security  ApiKeyAuth
// @accept    application/json
// @Produce   application/json
// @Param	  userId query string true "用户 userId"
// @Success   200   {object}  Response{data=User}  "用户信息"
// @Router    /user/getUserByUserId [get]
func (u userController) GetUserByUserId(c *gin.Context) {
	userId := c.Query("userId")
	if userId == "" {
		if Error400(c, errors.New(constant.ParamsEmpty)) {
			return
		}
	}
	user, _ := UserService.GetUserByUserId(userId)
	// if Error500(c, err) {
	// 	return
	// }
	SendResponseOk(c, constant.RequestSuccess, user)
}

func NewUserController() Interface_UserController {
	log.Println(">>>>>>>>>>>> NewUserController")
	return &userController{}
}
