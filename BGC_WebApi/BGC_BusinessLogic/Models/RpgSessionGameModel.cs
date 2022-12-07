using BGC_DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_BusinessLogic.Models;
public class RpgSessionGameModel
{
    public int RpgSessionGameId { get; set; }

    public int RpgSessionId { get; set; }
    public RpgSession RpgSession { get; set; }

    public int GameVersionId { get; set; }
    public GameVersion GameVersion { get; set; }
}
