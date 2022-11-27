using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_DataAccess.Entities;
public class RpgCampaignRegistration
{
    public int RpgCampaignRegistrationId { get; set; }

    public int MemberId { get; set; }
    public Member Player { get; set; }

    public int RpgCampaignId {get; set;}
    public RpgCampaign RpgCampaign { get; set; }
}

public class RpgCampaignRegistrationConfiguration : IEntityTypeConfiguration<RpgCampaignRegistration>
{
    public void Configure(EntityTypeBuilder<RpgCampaignRegistration> builder)
    {
        builder.Property(r => r.RpgCampaign).IsRequired();
        builder.Property(r => r.Player).IsRequired();

        //builder.HasOne<Member>().WithMany(r => r.).HasForeignKey.OnDelete(DeleteBehavior.NoAction);
        //builder.HasOne<Member>().WithMany(r => r.Member).HasForeignKey.OnUpdate(DeleteBehavior.NoAction);
    }
}