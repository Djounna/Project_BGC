using AutoMapper;
using BGC_DataAccess.Entities;
using BGC_DataAccess.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_BusinessLogic.Services;
public class MemberBLL
{
    private IMemberService memberService;

    public MemberBLL(IMemberService memberService)
    {
        this.memberService = memberService;
    }

    public async Task CheckAndCreateUser(Member member)
    {
       if (await memberService.CheckUserExist(member.Email) == false)
        {
          await memberService.Insert(member);
        }
        return;
    }

}
