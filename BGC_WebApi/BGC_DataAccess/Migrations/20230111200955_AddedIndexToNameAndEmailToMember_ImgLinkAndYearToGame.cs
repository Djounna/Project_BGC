using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BGCDataAccess.Migrations
{
    /// <inheritdoc />
    public partial class AddedIndexToNameAndEmailToMemberImgLinkAndYearToGame : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ImageLink",
                table: "Games",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Year",
                table: "Games",
                type: "int",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageLink",
                table: "Games");

            migrationBuilder.DropColumn(
                name: "Year",
                table: "Games");
        }
    }
}
