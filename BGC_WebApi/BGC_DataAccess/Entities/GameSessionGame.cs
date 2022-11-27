using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_DataAccess.Entities;
public class GameSessionGame
{
    public int GameSessionGameId { get; set; }

    public int GameSessionId { get; set; }
    public GameSession GameSession { get; set; }

    public int GameVersionId { get; set; }
    public GameVersion GameVersion { get; set; }

}

public class GameSessionGameConfiguration : IEntityTypeConfiguration<GameSessionGame>
{
    public void Configure(EntityTypeBuilder<GameSessionGame> builder)
    {
        builder.Property(g => g.GameSession).IsRequired();
        builder.Property(g =>g.GameVersion).IsRequired();                                            
    }
}