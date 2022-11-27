using BGC_DataAccess.Enums;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_DataAccess.Entities;

public class GameSession
{
    public int GameSessionId { get; set; }
    public string Name { get; set;  }
    public string? Description { get; set; }
    public DateTime Schedule { get; set; }

    public int? MinNumberPlayers { get; set; }
    public int? MaxNumberPlayers { get; set; }

    public SessionStatus Status { get; set; }
    public int? Length { get; set; }

    public int? OrganizerId { get; set; }
    public Member Organizer { get; set; }
    public GameTable Table { get; set; }
}

public class GameSessionConfiguration : IEntityTypeConfiguration<GameSession>
{
    public void Configure(EntityTypeBuilder<GameSession> builder)
    {
        builder.Property(g => g.Name).IsRequired()
                                     .HasMaxLength(100);

        builder.Property(g => g.Description).HasMaxLength(1000);

        builder.Property(g => g.Schedule).IsRequired();
        builder.Property(g => g.Status).IsRequired();
    }
}