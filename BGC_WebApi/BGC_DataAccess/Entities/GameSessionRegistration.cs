using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_DataAccess.Entities;
public class GameSessionRegistration
{
    public int GameSessionRegistrationId { get; set; }
    
    public Member player { get; set; }
    public GameSession GameSession { get; set; }
}

public class GameSessionRegistrationConfiguration : IEntityTypeConfiguration<GameSessionRegistration>
{
    public void Configure(EntityTypeBuilder<GameSessionRegistration> builder)
    {
        builder.Property(g => g.GameSession).IsRequired();
        builder.Property(g => g.player).IsRequired();
    }
}
