using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_DataAccess.Entities;
public class RpgSessionGame
{
    public int RpgSessionGameId { get; set; }

    public int RpgSessionId { get; set; }
    public RpgSession RpgSession { get; set; }

    public int GameVersionId { get; set; }
    public GameVersion GameVersion { get; set; }
}

public class RpgSessionGameConfiguration : IEntityTypeConfiguration<RpgSessionGame>
{
    public void Configure(EntityTypeBuilder<RpgSessionGame> builder)
    {
        builder.Property(r => r.GameVersion).IsRequired();
        builder.Property(r => r.RpgSession).IsRequired();
    }
}