using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BGCDataAccess.Migrations
{
    /// <inheritdoc />
    public partial class AddedNameToGameVersion : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "GameVersions",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                table: "GameVersions");
        }
    }
}
