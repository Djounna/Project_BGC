using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_DataAccess.Entities;

public class RpgCampaign
{
    public int RpgCampaignId { get; set; }
    public string Name { get; set; }
    public string? Description { get; set; }

    public RpgCampaignRegistration RpgCampaignRegistration { get; set; }    

    public int? OrganizerId { get; set; }   
    public Member Organizer { get; set; }

    public ICollection<RpgSession> Sessions { get; set; }
}

public class RpgCampaignConfiguration : IEntityTypeConfiguration<RpgCampaign>
{
    public void Configure(EntityTypeBuilder<RpgCampaign> builder)
    {
        builder.Property(r => r.Name).IsRequired().HasMaxLength(50);
        builder.Property(r => r.Description).HasMaxLength(1000);
        builder.Property(r => r.Organizer).IsRequired();
    }
}