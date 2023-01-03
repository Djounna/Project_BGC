using BGC_BusinessLogic.Configuration;
using BGC_BusinessLogic.Services;
using BGC_DataAccess;
using BGC_DataAccess.Interfaces;
using BGC_DataAccess.Services;
using BGC_WebApi.Configuration;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using System.Text.Json;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// DI :
//  DBContext
builder.Services.AddDbContext<BGCContext>(
        options => options.UseSqlServer(@"Data Source=LAPTOP-R3GDQJIT;Initial Catalog=BoardGameClub;Integrated Security=True;Connect Timeout=60;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False;"));

//  Services: DataAccess
builder.Services.AddScoped<IMemberService,MemberService>();
builder.Services.AddScoped<IGameService,GameService>();
builder.Services.AddScoped<IGameSessionGameService,GameSessionGameService>();
builder.Services.AddScoped<IGameSessionService,GameSessionService>();
builder.Services.AddScoped<IGameSessionRegistrationService, GameSessionRegistrationService>();
builder.Services.AddScoped<IGameVersionService, GameVersionService>();
builder.Services.AddScoped<IRpgCampaignRegistrationService,RpgCampaignRegistrationService>();
builder.Services.AddScoped<IRpgCampaignService,RpgCampaignService>();
builder.Services.AddScoped<IRpgSessionGameService,RpgSessionGameService> ();
builder.Services.AddScoped<IRpgSessionService,RpgSessionService>();
builder.Services.AddScoped<IGameTableService,GameTableService>();

//Services : Business
builder.Services.AddScoped<MemberBLL>();
builder.Services.AddScoped<GameBLL>();
//builder.Services.AddScoped<GameSessionGameBLL>();
builder.Services.AddScoped<GameSessionBLL>();
//builder.Services.AddScoped<GameSessionRegistrationBLL>();
//builder.Services.AddScoped<GameVersionBLL>();
//builder.Services.AddScoped<RpgCampaignRegistrationBLL>();
//builder.Services.AddScoped<RpgCampaignBLL>();
//builder.Services.AddScoped<RpgSessionGameBLL>();
//builder.Services.AddScoped<RpgSessionBLL>();
//builder.Services.AddScoped<GameTableBLL>();

// AutoMapper
builder.Services.AddAutoMapper(typeof(APIMappingProfile), typeof(BLLMappingProfile));

builder.Services.AddControllers()
// Non obligatoire, pour être certain que les JSON renvoyés sont en camelCase
.AddJsonOptions(options =>
{
    options.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
})
;

string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
      builder => builder
      .WithOrigins("http://localhost:4200")
      .AllowAnyHeader()
      .AllowAnyMethod());
});

string domain = $"https://{builder.Configuration["Auth0:Domain"]}/";

builder.Services
    .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.Authority = domain;
        options.Audience = builder.Configuration["Auth0:Audience"];
        options.TokenValidationParameters =
                  new TokenValidationParameters { NameClaimType = ClaimTypes.NameIdentifier };
    });

builder.Services
    .AddAuthorization(opt =>
    {
        opt.AddPolicy("read:games", policy => policy.RequireClaim("permissions", "read:games"));
        opt.AddPolicy("write:games", policy => policy.RequireClaim("permissions", "write:games"));
        opt.AddPolicy("read:members", policy => policy.RequireClaim("permissions", "read:members"));
        opt.AddPolicy("write:members", policy => policy.RequireClaim("permissions", "write:members"));
        opt.AddPolicy("read:tables", policy => policy.RequireClaim("permissions", "read:tables"));
        opt.AddPolicy("write:tables", policy => policy.RequireClaim("permissions", "write:tables"));
        opt.AddPolicy("read:gameSessions", policy => policy.RequireClaim("permissions", "read:gameSessions"));
        opt.AddPolicy("write:gameSessions", policy => policy.RequireClaim("permissions", "write:gameSessions"));
    }
    );







var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(MyAllowSpecificOrigins);

app.UseHttpsRedirection();
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();

app.Run();
