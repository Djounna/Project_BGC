using BGC_DataAccess.Entities;
using BGC_DataAccess.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_BusinessLogic.Models;
public class RpgSessionModel
{
    public int RpgSessionId { get; set; }
    public string Name { get; set; }
    public string? Description { get; set; }
    public DateTime Schedule { get; set; }

    public SessionStatus Status { get; set; }

    public RpgCampaign Campaign { get; set; }
    public GameTable Table { get; set; }
}
