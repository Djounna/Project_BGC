using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_DataAccess.Enums;

public enum SessionStatus
{
    Pending, // En attente de confirmation par l'organisateur
    Confirmed, // Partie confirmée
    Done, // Partie jouée/termminée
    Canceled // Partie annulée
}
