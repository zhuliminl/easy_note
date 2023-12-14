package module

import (
	"log"

	"github.com/gin-gonic/gin"
	"github.com/zhuliminl/word_server/constError"
	"github.com/zhuliminl/word_server/constant"
)

type Interface_AuthController interface {
	RegisterByEmail(c *gin.Context)
	RegisterByPhone(c *gin.Context)
	LoginByEmail(c *gin.Context)
	LoginByPhone(c *gin.Context)
}

type authController struct{}

// LoginByEmail
// @Tags      auth
// @Summary   通过邮箱登录
// @accept    application/json
// @Produce   application/json
// @Param	  data body UserLoginByEmail true "登录"
// @Success   200   {object}  Response{data=ResToken}  "用户信息和 token"
// @Router    /auth/loginByEmail [post]
func (u authController) LoginByEmail(c *gin.Context) {
	var userLogin UserLoginByEmail
	err := c.ShouldBindJSON(&userLogin)
	if Error400(c, err) {
		return
	}
	user, err := AuthService.VerifyCredentialByEmail(userLogin.Email, userLogin.Password)
	if IsConstError(c, err, constError.UserNotFound) {
		return
	}
	if IsConstError(c, err, constError.PasswordNotMatch) {
		return
	}
	if Error500(c, err) {
		return
	}

	token := JWTService.GenerateToken(user.ID)
	SendResponseOk(c, constant.LoginSuccess, ResToken{Token: token})
}

// LoginByPhone
// @Tags      auth
// @Summary   通过手机号登录
// @accept    application/json
// @Produce   application/json
// @Param	  data body UserLoginByPhone true "登录"
// @Success   200   {object}  Response{data=ResRegister}  "用户信息和 token"
// @Router    /auth/loginByPhone [post]
func (u authController) LoginByPhone(c *gin.Context) {
	var userLogin UserLoginByPhone
	err := c.ShouldBindJSON(&userLogin)
	if Error400(c, err) {
		return
	}
	user, err := AuthService.VerifyCredentialByPhone(userLogin.Phone, userLogin.Password)
	if IsConstError(c, err, constError.UserNotFound) {
		return
	}
	if IsConstError(c, err, constError.PasswordNotMatch) {
		return
	}
	if Error500(c, err) {
		return
	}

	token := JWTService.GenerateToken(user.ID)
	SendResponseOk(c, constant.LoginSuccess, ResToken{Token: token})
}

// RegisterByEmail
// @Tags      auth
// @Summary   通过邮箱注册
// @accept    application/json
// @Produce   application/json
// @Param	  data body UserRegisterByEmail true "注册"
// @Success   200   {object}  Response{data=ResRegister}  "用户信息和 token"
// @Router    /auth/registerByEmail [post]
func (u authController) RegisterByEmail(c *gin.Context) {
	var userRegister UserRegisterByEmail
	err := c.ShouldBindJSON(&userRegister)
	if Error400(c, err) {
		return
	}

	// 校验用户注册
	err = AuthService.VerifyRegisterByEmail(userRegister)
	if IsConstError(c, err, constError.EmailNotValid) {
		return
	}
	if IsConstError(c, err, constError.PasswordNotValid) {
		return
	}
	if IsConstError(c, err, constError.UserDuplicated) {
		return
	}
	if Error500(c, err) {
		return
	}
	user, err := AuthService.CreateUserByEmail(userRegister)
	if Error500(c, err) {
		return
	}
	// 生成 token
	token := JWTService.GenerateToken(user.ID)
	res := ResRegister{Token: token, User: user}
	SendResponseOk(c, constant.RequestSuccess, res)
}

// RegisterByPhone
// @Tags      auth
// @Summary   通过手机注册
// @accept    application/json
// @Produce   application/json
// @Param	  data body UserRegisterByPhone true "注册"
// @Success   200   {object}  Response{data=ResRegister}  "用户信息和 token"
// @Router    /auth/registerByPhone [post]
func (u authController) RegisterByPhone(c *gin.Context) {
	var userRegister UserRegisterByPhone
	err := c.ShouldBindJSON(&userRegister)
	if Error400(c, err) {
		return
	}

	// 校验用户注册
	err = AuthService.VerifyRegisterByPhone(userRegister)
	if IsConstError(c, err, constError.PhoneNumberNotValid) {
		return
	}
	if IsConstError(c, err, constError.PasswordNotValid) {
		return
	}
	if IsConstError(c, err, constError.UserDuplicated) {
		return
	}
	if Error500(c, err) {
		return
	}
	user, err := AuthService.CreateUserByPhone(userRegister)
	if Error500(c, err) {
		return
	}
	// 生成 token
	token := JWTService.GenerateToken(user.ID)
	res := ResRegister{Token: token, User: user}
	SendResponseOk(c, constant.RequestSuccess, res)
}

func NewAuthController() Interface_AuthController {
	log.Println(">>>>>>>>>>>> NewAuthController")
	return &authController{}
}
