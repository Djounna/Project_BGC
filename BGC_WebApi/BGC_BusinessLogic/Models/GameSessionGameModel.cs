using BGC_DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_BusinessLogic.Models;
public class GameSessionGameModel
{
    public int GameSessionGameId { get; set; }

    public int GameSessionId { get; set; }
    public GameSession GameSession { get; set; }

    public int GameVersionId { get; set; }
    public GameVersion GameVersion { get; set; }
}
