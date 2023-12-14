package db

import (
	"fmt"
	"log"
	"os"
	"time"

	"github.com/zhuliminl/word_server/config"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

var DB *gorm.DB

func Init() {
	c := config.GetConfig()
	user := c.GetString("mysql.user")
	address := c.GetString("mysql.address")
	// port := c.GetString("mysql.port")
	password := c.GetString("mysql.password")
	database_name := c.GetString("mysql.database_name")

	dsn := fmt.Sprintf("%s:%s@tcp(%s:3306)/%s?charset=utf8&parseTime=True&loc=Local", user, password, address, database_name)

	log.Println("数据库 dsn", dsn)

	newLogger := logger.New(
		log.New(os.Stdout, "\r\n", log.LstdFlags), // io writer（日志输出的目标，前缀和日志包含的内容——译者注）
		logger.Config{
			SlowThreshold:             time.Second, // 慢 SQL 阈值
			LogLevel:                  logger.Info,
			IgnoreRecordNotFoundError: true,  // 忽略ErrRecordNotFound（记录未找到）错误
			Colorful:                  false, // 禁用彩色打印
		},
	)

	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{
		Logger: newLogger,
	})
	if err != nil {
		panic("链接数据库失败")
	}

	// db.AutoMigrate(&module.User{})
	DB = db
}

func CloseDatabaseConnection() {
	dbSQL, err := DB.DB()
	if err != nil {
		panic("Failed to close connection from database")
	}
	dbSQL.Close()
}
