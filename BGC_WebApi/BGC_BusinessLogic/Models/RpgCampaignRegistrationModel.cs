using BGC_DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_BusinessLogic.Models;
public class RpgCampaignRegistrationModel
{
    public int RpgCampaignRegistrationId { get; set; }

    public int MemberId { get; set; }
    public Member Player { get; set; }

    public int RpgCampaignId { get; set; }
    public RpgCampaign RpgCampaign { get; set; }
}
