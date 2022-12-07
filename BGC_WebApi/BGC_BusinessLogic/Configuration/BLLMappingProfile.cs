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
        CreateMap<Game, GameModel>().ReverseMap();
        CreateMap<GameVersion, GameVersionModel>().ReverseMap();
        CreateMap<GameSession, GameSessionModel>().ReverseMap();
        CreateMap<GameSessionGame, GameSessionGameModel>().ReverseMap();
        CreateMap<GameTable, GameTableModel>().ReverseMap();
        CreateMap<RpgCampaign, RpgCampaignModel>().ReverseMap();
        CreateMap<RpgSession, RpgSessionModel>().ReverseMap();
        CreateMap<GameSessionRegistration, GameSessionRegistrationModel>().ReverseMap();
        CreateMap<RpgCampaignRegistration, RpgCampaignRegistrationModel>().ReverseMap();
        CreateMap<RpgSessionGame, RpgSessionGameModel>().ReverseMap();
        CreateMap<Member, MemberModel>().ReverseMap();
    }
}
