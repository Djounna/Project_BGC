﻿using BGC_DataAccess.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_DataAccess;
public class BGCContext : DbContext
{
    public BGCContext(DbContextOptions<BGCContext> options) : base(options) { }

    public DbSet<Member> Members { get; set; }
    public DbSet<Game> Games { get; set; }
    public DbSet<GameVersion> GameVersions { get; set; }
    public DbSet<GameSession> GameSessions { get; set; }
    public DbSet<GameSessionGame> GameSessionGames { get; set; }
    public DbSet<GameSessionRegistration> GameSessionRegistrations { get; set; }
    public DbSet<RpgCampaign> RpgCampaigns { get; set; }
    public DbSet<RpgCampaignRegistration> RpgCampaignRegistrations { get; set; }
    public DbSet<RpgSession> RpgSessions { get; set; }
    public DbSet<RpgSessionGame> RpgSessionGames { get; set; }
    public DbSet<GameTable> GameTables { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer(@"Data Source=LAPTOP-R3GDQJIT;Initial Catalog=BoardGameClub;Integrated Security=True;Connect Timeout=60;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False;");
    }
}
