using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_DataAccess.Entities;

public class Member
{
    public int MemberId { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    //public string Password { get; set; }
    //public string Role { get; set; }  

    public ICollection<RpgCampaign> RpgCampaigns { get;set; }
    public ICollection<GameSession> GameSessions { get; set; }

    public ICollection<RpgCampaignRegistration> RpgCampaignRegistrations { get; set; }
    public ICollection<GameSessionRegistration> GameSessionRegistrations { get; set; }
}

public class MemberConfiguration : IEntityTypeConfiguration<Member>
{
    public void Configure(EntityTypeBuilder<Member> builder)
    {
        builder.HasIndex(n => n.Name, "Name");builder.HasIndex(n => n.Email, "Email");
        builder.Property(m => m.Name).IsRequired().HasMaxLength(50);
        builder.Property(m => m.Email).IsRequired().HasMaxLength(50);
        //builder.Property(m => m.Password).IsRequired().HasMaxLength(50);
        //builder.Property(m => m.Role).IsRequired(); 

    }
}