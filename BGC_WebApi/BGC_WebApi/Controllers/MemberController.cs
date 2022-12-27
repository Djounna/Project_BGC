﻿using AutoMapper;
using BGC_BusinessLogic.Services;
using BGC_DataAccess.Entities;
using BGC_DataAccess.Interfaces;
using BGC_DataAccess.Services;
using BGC_WebApi.DTOs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BGC_WebApi.Controllers;

/// <summary>
/// Controller for Members
/// </summary>
[Route("api/[controller]")]
[ApiController]
public class MemberController : BaseController
{
    private IMemberService memberService;
    private MemberBLL memberBLL;

    public MemberController(IMemberService memberService, MemberBLL memberBll, IMapper mapper) : base(mapper)
    {
        this.memberService = memberService;
        this.memberBLL = memberBll;
    }

    /// <summary>
    /// Get All Members
    /// </summary>
    [HttpGet]

    public async Task<ActionResult<IEnumerable<MemberDTO>>> GetAll()
    {
        return Ok(mapper.Map<IEnumerable<MemberDTO>>(await memberService.GetAll()));
    }

    /// <summary>
    /// Get Member By Id
    /// </summary>
    [HttpGet]
    [Route("{id}")]
    public async Task<ActionResult<MemberDTO>> GetById(int id)
    {
        return Ok(mapper.Map<MemberDTO>(await memberService.GetById(id)));
    }

    /// <summary>
    /// Create a new Member
    /// </summary>
    [HttpPost]
    public async Task<ActionResult> Post([FromBody] MemberDTO MemberDTO)
    {
        await memberService.Insert(mapper.Map<Member>(MemberDTO));
        return Ok();
    }


    /// <summary>
    ///  Update a Member
    /// </summary>
    [HttpPut]
    public async Task<ActionResult> Put(int id, [FromBody] MemberDTO MemberDTO)
    {
        await memberService.Update(id, mapper.Map<Member>(MemberDTO));
        return Ok();
    }

    /// <summary>
    /// Delete a Member
    /// </summary>
    [HttpDelete]
    public void Delete(int id)
    {
        // 
    }

    /// <summary>
    /// Checks if user exists in DB and creates it if necessary
    /// </summary>
    /// <param name="memberDTO">Member DTO</param>
    [HttpPost]
    [Route("CheckUserExists")]
    public async Task<ActionResult<bool>> CheckUserExists([FromBody]MemberDTO memberDTO)
    {
        if (await memberBLL.CheckAndCreateUser(mapper.Map<Member>(memberDTO)))
        {
            return Ok(true);
        }
        return Ok(false);
    }

}
