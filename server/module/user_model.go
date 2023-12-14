package module

type User struct {
	ID             string `gorm:"primary_key;type:varchar(64)" json:"user_id"`
	Username       string `gorm:"type:varchar(255)" json:"username"`
	Email          string `gorm:"type:varchar(255)" json:"email"`
	Password       string `gorm:"->;<-;not null" json:"-"`
	Phone          string `gorm:"type:varchar(255)" json:"phone"`
	OpenId         string `gorm:"type:varchar(255)" json:"wx_openid"`
	WechatNickname string `gorm:"type:varchar(255)" json:"wx_nickname"`
	// Projects       []Project `json:"projects"`
	Teams []Team `gorm:"foreignKey:UserID" json:"teams"`
}

type ResRegister struct {
	Token string `json:"token"`
	User  User   `json:"user"`
}

type UserRegister struct {
	Username string `json:"username"`
	Email    string `json:"email"`
	Phone    string `json:"phone"`
}

type UserRegisterByEmail struct {
	Username string `json:"username"`
	Email    string `json:"email" binding:"required"`
	Password string `json:"password" binding:"required"`
}

type UserRegisterByPhone struct {
	Username string `json:"username"`
	Phone    string `json:"phone" binding:"required"`
	Password string `json:"password" binding:"required"`
}

type UserLogin struct {
	Email    string `json:"email" binding:"required"`
	Password string `json:"password" binding:"required"`
}

type UserLoginByEmail struct {
	Email    string `json:"email" binding:"required"`
	Password string `json:"password" binding:"required"`
}

type UserLoginByPhone struct {
	Phone    string `json:"phone" binding:"required"`
	Password string `json:"password" binding:"required"`
}

type ResToken struct {
	Token string `json:"token"`
}
