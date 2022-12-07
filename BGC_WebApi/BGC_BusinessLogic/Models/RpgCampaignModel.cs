using BGC_DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_BusinessLogic.Models;
public class RpgCampaignModel
{
    public int RpgCampaignId { get; set; }
    public string Name { get; set; }
    public string? Description { get; set; }

    public RpgCampaignRegistration RpgCampaignRegistration { get; set; }

    public int? OrganizerId { get; set; }
    public Member Organizer { get; set; }

    public ICollection<RpgSession> Sessions { get; set; }
}
