using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_DataAccess.Entities;
public class GameVersion
{
    public int GameVersionId { get; set; }
    
    public int GameId { get; set; } 
    public Game Game { get; set; }

    public ICollection<GameSessionGame> GameSessionGames { get; set; }
    public ICollection<RpgSessionGame> RpgSessionGames { get; set; }
}

public class GameeVersionConfiguration : IEntityTypeConfiguration<GameVersion>
{
    public void Configure(EntityTypeBuilder<GameVersion> builder)
    {
        builder.Property(g => g.Game).IsRequired();
    }
}
