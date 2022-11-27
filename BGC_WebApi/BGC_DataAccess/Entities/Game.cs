using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_DataAccess.Entities;
public class Game
{
    public int GameId { get; set; } 
    public string Name { get; set; }
    public string? Description { get; set; }

    public int? MinNumberPlayers { get; set; }
    public int? MaxNumberPlayers { get; set; }

    public ICollection<GameVersion> Versions { get; set; }

}

public class GameConfiguration : IEntityTypeConfiguration<Game>
{
    public void Configure(EntityTypeBuilder<Game> builder)
    {
        builder.Property(g => g.Name).IsRequired()
                                     .HasMaxLength(100);
        builder.Property(g => g.Description).HasMaxLength(1000);
    }
} 
