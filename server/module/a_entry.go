package module

var (
	UserController = NewUserController()
	UserService    = NewUserService()
	UserRepository = NewUserRepository()

	AuthController = NewAuthController()
	AuthService    = NewAuthService()

	TeamController = NewTeamController()
	TeamService    = NewTeamService()
	TeamRepository = NewTeamRepository()

	// 其他
	JWTService = NewJWTService()
)
