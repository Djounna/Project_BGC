using BGC_DataAccess.Enums;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;

namespace BGC_DataAccess.Entities;

public class RpgSession
{
    public int RpgSessionId { get; set; }
    public string Name { get; set; }
    public string? Description { get; set; }
    public DateTime Schedule { get; set; }
    
    public SessionStatus Status { get; set; }

    public RpgCampaign Campaign { get; set; }
    public GameTable Table { get; set; }
}

public class RpgSessionConfiguration : IEntityTypeConfiguration<RpgSession>
{
    public void Configure(EntityTypeBuilder<RpgSession> builder)
    {
        builder.Property(r => r.Name).IsRequired().HasMaxLength(50);
        builder.Property(r => r.Description).HasMaxLength(1000);
        builder.Property(r => r.Status).IsRequired();
        builder.Property(r => r.Campaign).IsRequired();        
    }
}