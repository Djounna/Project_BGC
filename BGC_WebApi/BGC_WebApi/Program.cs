using BGC_BusinessLogic.Configuration;
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

//  Services : Business
//builder.Services.AddScoped<IMemberBLL, MemberBLL>();
//builder.Services.AddScoped<IGameBLL, GameBLL>();
//builder.Services.AddScoped<IGameSessionGameBLL, GameSessionGameBLL>();
//builder.Services.AddScoped<IGameSessionBLL, GameSessionBLL>();
//builder.Services.AddScoped<IGameSessionRegistrationBLL, GameSessionRegistrationBLL>();
//builder.Services.AddScoped<IGameVersionBLL, GameVersionBLL>();
//builder.Services.AddScoped<IRpgCampaignRegistrationBLL, RpgCampaignRegistrationBLL>();
//builder.Services.AddScoped<IRpgCampaignBLL, RpgCampaignBLL>();
//builder.Services.AddScoped<IRpgSessionGameBLL, RpgSessionGameBLL>();
//builder.Services.AddScoped<IRpgSessionBLL, RpgSessionBLL>();
//builder.Services.AddScoped<IGameTableBLL, GameTableBLL>();

// AutoMapper
builder.Services.AddAutoMapper(typeof(APIMappingProfile), typeof(BLLMappingProfile));

builder.Services.AddControllers()
// Non obligatoire, pour �tre certain que les JSON renvoy�s sont en camelCase
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
        opt.AddPolicy("client", policy => policy.RequireClaim("permissions", "client"));
        opt.AddPolicy("admin", policy => policy.RequireClaim("permissions", "admin"));
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
