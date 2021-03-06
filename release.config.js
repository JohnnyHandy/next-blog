module.exports = {
  branches: 'main',
  repositoryUrl: 'https://github.com/JohnnyHandy/next-blog',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/github',
      {
        assets: [
          {
            path: 'coverage.zip',
            label: 'Coverage',
          },
        ],
      },
    ],
  ],
}
