using BGC_DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_BusinessLogic.Models;
public class GameTableModel
{
    public int GameTableId { get; set; }
    public int Size { get; set; }

    public ICollection<GameSession> GameSessions { get; set; }
    public ICollection<RpgSession> RpgSessions { get; set; }
}
