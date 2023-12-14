package main

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	swaggerfiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
	"github.com/zhuliminl/word_server/config"
	"github.com/zhuliminl/word_server/db"
	docs "github.com/zhuliminl/word_server/docs"
	"github.com/zhuliminl/word_server/middlewares"
	"github.com/zhuliminl/word_server/module"
)

func StartServer() {
	c := config.GetConfig()

	db.Init()
	// 数据迁移
	db.DB.AutoMigrate(&module.User{})

	defer db.CloseDatabaseConnection()

	router := gin.New()
	router.Use(gin.Logger())
	router.Use(gin.Recovery())

	// 中间件
	JWTMiddleware := middlewares.JWT(module.JWTService)
	// 跨域
	router.Use(cors.Default())

	// 路由
	// 用户
	router.GET("/user/getUserByUserId", module.UserController.GetUserByUserId)
	router.GET("/user/getMyInfo", JWTMiddleware, module.UserController.GetMyInfo)
	// 认证
	router.POST("/auth/registerByEmail", module.AuthController.RegisterByEmail)
	router.POST("/auth/registerByPhone", module.AuthController.RegisterByPhone)
	router.POST("/auth/loginByEmail", module.AuthController.LoginByEmail)
	router.POST("/auth/loginByPhone", module.AuthController.LoginByPhone)

	// router.GET("/team/getUserByUserId", teamController.GetTeamByUserId)

	address := c.GetString("server.address")
	port := c.GetString("server.port")

	// swagger 文档
	docs.SwaggerInfo.BasePath = "/v2"
	docs.SwaggerInfo.Version = "1.0.0"
	docs.SwaggerInfo.Host = "http://localhost:3500"
	router.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerfiles.Handler))

	// 启动
	router.Run(address + ":" + port)

}
