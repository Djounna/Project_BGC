using BGC_DataAccess.Entities;
using BGC_DataAccess.Interfaces;
using BGC_DataAccess.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_BusinessLogic.Services;
public class GameSessionBLL
{
	private IGameSessionService gameSessionService;
	private IGameSessionGameService gameSessionGameService;
	private IGameSessionRegistrationService gameSessionRegistrationService;
	private IMemberService memberService;

	public GameSessionBLL(IGameSessionGameService gameSessionGameService, IGameSessionRegistrationService gameSessionRegistrationService, IGameSessionService gameSessionService, IMemberService memberService)
	{
		this.gameSessionService = gameSessionService;
		this.gameSessionGameService= gameSessionGameService;
		this.gameSessionRegistrationService = gameSessionRegistrationService;
		this.memberService = memberService;
	}

	public async Task<IEnumerable<GameSession>> GetAllByMember(string memberName)
	{
		var member = await memberService.GetByName(memberName);

		var gameSessionsRegistrations = await gameSessionRegistrationService.GetAllByMemberId(member.MemberId);

		var gameSessions = gameSessionsRegistrations.Select(g => g.GameSession).ToList();

		return gameSessions;
	}


}
