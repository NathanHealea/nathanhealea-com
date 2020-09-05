import React, { useState } from 'react';

import { Section, Title, FeatureProject, ArchiveProject } from '@components';
import { Grid, Typography, Button, Box } from '@material-ui/core';

export default ({ featured, archived }) => {
  const [archiveShowMore, setShowMore] = useState(false);
  const toggleArchiveShowMore = () => setShowMore(!archiveShowMore);
  return (
    <Section>
      <Title>Projects</Title>
      {featured.nodes.map(({ frontmatter, body, id }) => {
        return (
          <FeatureProject
            key={id}
            {...frontmatter}
            {...{ description: body }}
          />
        );
      })}

      <Typography
        variant='h6'
        component='h6'
        color='inherit'
        gutterBottom
        style={{ textAlign: 'center', marginBottom: '1.35em' }}
      >
        Other Noteworthy projects
      </Typography>

      <Grid container spacing={4}>
        {archived.nodes.map(({ frontmatter, body, id }, index) => (
          <ArchiveProject
            key={id}
            hidden={index > 5 ? !archiveShowMore : false}
            {...frontmatter}
            {...{ description: body }}
          />
        ))}
      </Grid>
      <Box my={4} textAlign='center'>
        <Button
          onClick={toggleArchiveShowMore}
          size='large'
          variant='outlined'
          color='primary'
        >
          Show More
        </Button>
      </Box>
    </Section>
  );
};
