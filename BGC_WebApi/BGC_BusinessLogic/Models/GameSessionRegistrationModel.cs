using BGC_DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_BusinessLogic.Models;
public class GameSessionRegistrationModel
{
    public int GameSessionRegistrationId { get; set; }

    public int MemberId { get; set; }
    public Member Player { get; set; }

    public int GameSessionId { get; set; }
    public GameSession GameSession { get; set; }
}
