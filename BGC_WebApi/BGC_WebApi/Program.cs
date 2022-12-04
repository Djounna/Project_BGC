using BGC_DataAccess;
using BGC_DataAccess.Interfaces;
using BGC_DataAccess.Services;
using Microsoft.EntityFrameworkCore;

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



var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}



app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
