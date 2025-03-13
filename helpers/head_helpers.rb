module HeadHelpers
  def title
    [ current_page.data.title.presence, "#JEANGELIQUE" ].compact.join(' · ')
  end

  def description
    current_page.data.description || "#JEANGELIQUE"
  end
end
