using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_BusinessLogic.Models;
public class GameModel
{
    public int GameId { get; set; }
    public string Name { get; set; }
    public string? Description { get; set; }

    public int? MinNumberPlayers { get; set; }
    public int? MaxNumberPlayers { get; set; }
}
