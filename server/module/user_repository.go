package module

import (
	"errors"
	"log"

	"github.com/zhuliminl/word_server/constError"
	"github.com/zhuliminl/word_server/db"
	"gorm.io/gorm"
)

type Interface_UserRepository interface {
	GetUserById(userId string) (User, error)
	GetUserByEmail(email string) (User, error)
	GetUserByPhone(phone string) (User, error)
	GetUserByOpenId(openId string) (User, error)
	CreateUser(user User) error
}

type userRepository struct {
}

func (u userRepository) GetUserByOpenId(openId string) (User, error) {
	var user User
	if err := db.DB.Where("openId = ?", openId).First(&user).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return user, constError.NewUserNotFound(err, "用户不存在")
		} else {
			return user, err
		}
	}
	return user, nil
}

func (u userRepository) GetUserByPhone(phone string) (User, error) {
	var user User
	if err := db.DB.Where("phone = ?", phone).First(&user).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return user, constError.NewUserNotFound(err, "用户不存在")
		} else {
			return user, err
		}
	}
	return user, nil
}

func (u userRepository) GetUserByEmail(email string) (User, error) {
	var user User
	if err := db.DB.Where("email = ?", email).First(&user).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return user, constError.NewUserNotFound(err, "用户不存在")
		} else {
			return user, err
		}
	}
	return user, nil
}

func (u userRepository) CreateUser(user User) error {
	return db.DB.Create(&user).Error
}

func (u userRepository) GetUserById(userId string) (User, error) {
	var user User
	if err := db.DB.Where("id = ?", userId).Preload("Teams").First(&user).Error; err != nil {
		return user, err
	}
	return user, nil
}

func NewUserRepository() Interface_UserRepository {
	log.Println(">>>>>>>>>>>> NewUserRepository")
	return &userRepository{}
}
