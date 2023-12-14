package module

import (
	"log"

	uuid "github.com/satori/go.uuid"
	"github.com/zhuliminl/word_server/constError"
	"github.com/zhuliminl/word_server/helper"
)

type Interface_AuthService interface {
	VerifyCredentialByEmail(email string, password string) (User, error)
	VerifyCredentialByPhone(phone string, password string) (User, error)

	VerifyRegisterByEmail(user UserRegisterByEmail) error
	VerifyRegisterByPhone(user UserRegisterByPhone) error

	CreateUserByEmail(user UserRegisterByEmail) (User, error)
	CreateUserByPhone(user UserRegisterByPhone) (User, error)
}

type authService struct {
}

func (a authService) VerifyCredentialByEmail(email string, password string) (User, error) {
	var user User
	// fixme
	return user, nil
}

func (a authService) VerifyCredentialByPhone(phone string, password string) (User, error) {
	var user User
	// fixme
	return user, nil
}

func (a authService) CreateUserByEmail(userRegister UserRegisterByEmail) (User, error) {
	username := userRegister.Username
	if username == "" {
		username = GenerateDefaultUserName()
	}
	var user = User{
		ID:       uuid.NewV4().String(),
		Username: username,
		Email:    userRegister.Email,
		Password: userRegister.Password,
	}
	err := UserService.CreateUser(user)
	if err != nil {
		return User{}, err
	}
	return user, nil
}

func (a authService) CreateUserByPhone(userRegister UserRegisterByPhone) (User, error) {
	username := userRegister.Username
	if username == "" {
		username = GenerateDefaultUserName()
	}
	var user = User{
		ID:       uuid.NewV4().String(),
		Username: username,
		Phone:    userRegister.Phone,
		Password: userRegister.Password,
	}
	err := UserService.CreateUser(user)
	if err != nil {
		return User{}, err
	}
	return user, nil
}

func (a authService) VerifyRegisterByEmail(user UserRegisterByEmail) error {
	if !helper.IsEmailValid(user.Email) {
		return constError.NewEmailNotValid(nil, "邮箱格式错误")
	}
	if !helper.IsPasswordValid(user.Password) {
		return constError.NewPasswordNotValid(nil, "密码格式错误")
	}

	_, err := UserRepository.GetUserByEmail(user.Email)
	if constError.Is(err, constError.UserNotFound) {
		return nil
	}
	if err != nil {
		return err
	}
	return constError.NewUserDuplicated(nil, "用户已注册")
}

func (a authService) VerifyRegisterByPhone(user UserRegisterByPhone) error {
	if !helper.IsPhoneValid(user.Phone) {
		return constError.NewPhoneNumberNotValid(nil, "手机格式错误")
	}
	if !helper.IsPasswordValid(user.Password) {
		return constError.NewPasswordNotValid(nil, "密码格式错误")
	}

	_, err := UserRepository.GetUserByPhone(user.Phone)
	if constError.Is(err, constError.UserNotFound) {
		return nil
	}
	if err != nil {
		return err
	}
	return constError.NewUserDuplicated(nil, "用户已注册")
}

func NewAuthService() Interface_AuthService {
	log.Println(">>>>>>>>>>>> NewAuthService")
	return &authService{}
}
