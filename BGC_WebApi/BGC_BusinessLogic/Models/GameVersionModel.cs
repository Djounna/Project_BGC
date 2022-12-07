using BGC_DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_BusinessLogic.Models;
public class GameVersionModel
{
    public int GameVersionId { get; set; }

    public Game Game { get; set; }
}
