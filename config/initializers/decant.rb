Page = Decant.define(dir: "app/views/pages", ext: "html.erb") do
  # Declare frontmatter convenience readers.
  frontmatter :title

  # Add custom methods - it's a standard Ruby class.
  def shouty
    "#{title.upcase}!!!"
  end

  def html
    PagesController.render(inline: content)
  end
end
