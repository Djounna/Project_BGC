using BGC_DataAccess.Entities;
using BGC_DataAccess.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_BusinessLogic.Models;
public class GameSessionModel
{
    public int GameSessionId { get; set; }
    public string Name { get; set; }
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
