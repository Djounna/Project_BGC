using AutoMapper;
using BGC_BusinessLogic.Models;
using BGC_DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_BusinessLogic.Configuration;
public class BLLMappingProfile : Profile
{
    public BLLMappingProfile() 
    {
        CreateMap<Game, GameModel>();
        CreateMap<GameVersion, GameVersionModel>();
        CreateMap<GameSession, GameSessionModel>();
        CreateMap<GameSessionGame, GameSessionGameModel>();
        CreateMap<GameTable, GameTableModel>();
        CreateMap<RpgCampaign, RpgCampaignModel>();
        CreateMap<RpgSession, RpgSessionModel>();
        CreateMap<GameSessionRegistration, GameSessionRegistrationModel>();
        CreateMap<RpgCampaignRegistration, RpgCampaignRegistrationModel>();
        CreateMap<RpgSessionGame, RpgSessionGameModel>();
        CreateMap<Member, MemberModel>();
    }
}
