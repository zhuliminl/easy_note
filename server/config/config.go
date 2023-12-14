package config

import (
	"fmt"

	_ "github.com/fsnotify/fsnotify"
	"github.com/spf13/viper"
)

type AppNameConfig struct {
	AppName string `mapstructure:"app_name"`
}

// 数据库配置
type MySqlConfig struct {
	Address      string `mapstructure:"address"`
	Port         string `mapstructure:"port"`
	User         string `mapstructure:"user"`
	Password     string `mapstructure:"password"`
	EnableCreate bool   `mapstructure:"enable_create"`
	EnableLog    bool   `mapstructure:"enable_log"`
}

// 服务启动配置
type ServerConfig struct {
	Address string `mapstructure:"address"`
	Port    string `mapstructure:"port"`
}

// 缓存配置
type RedisConfig struct {
	Address string `mapstructure:"address"`
	Port    string `mapstructure:"port"`
}

// 微信配置
type WechatConfig struct {
	Address string `mapstructure:"address"`
	Port    string `mapstructure:"port"`
}

type Config struct {
	Db      MySqlConfig   `mapstructure:"mysql"`
	Server  ServerConfig  `mapstructure:"server"`
	AppName AppNameConfig `mapstructure:"app_name"`
}

var vp *viper.Viper

func Init(env string) {
	vp = viper.New()
	vp.SetConfigName("app")
	vp.SetConfigType("json")
	vp.AddConfigPath("./config")
	vp.AddConfigPath(".")

	vp.ReadInConfig()
	err := vp.ReadInConfig()

	if err != nil {
		fmt.Println("configInit", err)
	}

}

func GetConfig() *viper.Viper {
	return vp
}
