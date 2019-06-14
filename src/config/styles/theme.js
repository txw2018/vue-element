
export const theme = (themeColor) => {
  document.body.style.setProperty('--PC_theme_color', themeColor.PC_theme_color)
  document.body.style.setProperty('--PC_theme_menu_color', themeColor.PC_theme_menu_color)
  document.body.style.setProperty('--PC_theme_header_color', themeColor.PC_theme_header_color)
  document.body.style.setProperty('--PC_theme_font_color', themeColor.PC_theme_font_color)
  document.body.style.setProperty('--PC_theme_menu_selected_font_color', themeColor.PC_theme_menu_selected_font_color)
  document.body.style.setProperty('--PC_theme_menu_selected_bg_color', themeColor.PC_theme_menu_selected_bg_color)
}
