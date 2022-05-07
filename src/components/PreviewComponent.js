import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
  Link,
} from "@react-pdf/renderer";

const Quixote = (props) => {
  const { name, image, label, email, phone, url, summary } = props.basics;
  const education = props.education;
  const work = props.work;
  const projects = props.projects;
  const skills = props.skills;
  const awards = props.awards;
  return (
    <Document>
      <Page size="A4" style={styles.body}>
        {/* --------------------------------------------------------------------Basics--------------------------------------------------------------------------- */}

        <View style={styles.header} wrap={false}>
          {image && image.length > 0 && (
            <Image src={image} style={styles.profilePhoto} />
          )}
          <View style={{ width: "100%" }}>
            <Text style={styles.name}>{name}</Text>
            {label && label.length > 0 && (
              <Text style={[styles.caption, { margin: "4px 0px 6px 0px" }]}>
                {label}
              </Text>
            )}
            <View style={styles.social}>
              {email && email.length > 0 && (
                <Text style={styles.socialItem}>{email}</Text>
              )}
              {phone && phone.length > 0 && (
                <Text style={styles.socialItem}>{phone}</Text>
              )}
              {url && url.length > 0 && (
                <Text style={styles.socialItem}>{url}</Text>
              )}
            </View>
          </View>
        </View>
        <View>
          {summary && summary.length > 0 && (
            <Text style={styles.summary}>{summary}</Text>
          )}
        </View>

        {/* --------------------------------------------------------------------Education--------------------------------------------------------------------------- */}

        <View wrap={false}>
          {education && education.length > 0 && (
            <View>
              <Text style={styles.heading}>Education</Text>
              {education.map((item, index) => (
                <View key={index} style={styles.education}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    {(item.studyType.length > 0 || item.area.length > 0) && (
                      <Text style={styles.educationTitle}>
                        {`${item.studyType} ${item.area}`}
                      </Text>
                    )}
                    <View>
                      {((item.startDate && item.startDate.length > 0) ||
                        (item.endDate && item.endDate.length > 0)) && (
                        <Text style={styles.dim}>
                          {item.startDate ? item.startDate : "No Date"} -{" "}
                          {item.endDate ? item.endDate : "Present"}
                        </Text>
                      )}
                    </View>
                  </View>
                  <Text style={styles.institution}>{item.institution}</Text>

                  <View>
                    {item.score.length > 0 && (
                      <Text style={styles.dim}>Score : {item.score}</Text>
                    )}
                  </View>
                </View>
              ))}
            </View>
          )}
        </View>

        {/* --------------------------------------------------------------------Work--------------------------------------------------------------------------- */}

        <View wrap={false}>
          {work && work.length > 0 && (
            <View>
              <Text style={styles.heading}>Work</Text>
              {work.map((item, index) => (
                <View key={index} style={styles.education}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    {item.position && item.position.length > 0 && (
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Text style={styles.educationTitle}>
                          {item.position}
                        </Text>
                        <View
                          style={{
                            visibility: `${!item.url && "none"}`,
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <Text>&nbsp;|&nbsp;</Text>
                          <Link
                            style={[styles.educationTitle, styles.link]}
                            src={item.url}
                          >
                            Link
                          </Link>
                        </View>
                      </View>
                    )}

                    <View>
                      {((item.startDate && item.startDate.length > 0) ||
                        (item.endDate && item.endDate.length > 0)) && (
                        <Text style={styles.dim}>
                          {item.startDate ? item.startDate : "No Date"} -{" "}
                          {item.endDate ? item.endDate : "Present"}
                        </Text>
                      )}
                    </View>
                  </View>
                  <Text style={styles.institution}>{item.name}</Text>

                  <View style={{ padding: "4px" }}>
                    {item.highlights && item.highlights.length > 0 && (
                      <View>
                        {item.highlights
                          .trim()
                          .split("\n")
                          .map((line, ind) => (
                            <Text style={styles.highlight} key={ind}>
                              &bull; {` ${line.trim()}`}
                            </Text>
                          ))}
                      </View>
                    )}
                  </View>
                </View>
              ))}
            </View>
          )}
        </View>

        {/* --------------------------------------------------------------------Projects--------------------------------------------------------------------------- */}

        <View wrap={false}>
          {projects && projects.length > 0 && (
            <View>
              <Text style={styles.heading}>Projects</Text>
              {projects.map((item, index) => (
                <View key={index} style={styles.education}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    {item.name && item.name.length > 0 && (
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Text style={styles.educationTitle}>{item.name}</Text>
                        <View
                          style={{
                            visibility: `${!item.url && "none"}`,
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <Text>&nbsp;|&nbsp;</Text>
                          <Link
                            style={[styles.educationTitle, styles.link]}
                            src={item.url}
                          >
                            Link
                          </Link>
                        </View>
                      </View>
                    )}

                    <View>
                      {((item.startDate && item.startDate.length > 0) ||
                        (item.endDate && item.endDate.length > 0)) && (
                        <Text style={styles.dim}>
                          {item.startDate ? item.startDate : "No Date"} -{" "}
                          {item.endDate ? item.endDate : "Present"}
                        </Text>
                      )}
                    </View>
                  </View>

                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                    }}
                  >
                    {item.keywords &&
                      item.keywords
                        .trim()
                        .split(",")
                        .map((keyword, _) => (
                          <Text style={styles.keyword} key={keyword}>
                            {keyword}
                          </Text>
                        ))}
                  </View>

                  <View style={{ padding: "4px" }}>
                    {item.highlights && item.highlights.length > 0 && (
                      <View>
                        {item.highlights
                          .trim()
                          .split("\n")
                          .map((line, ind) => (
                            <Text style={styles.highlight} key={ind}>
                              &bull; {` ${line.trim()}`}
                            </Text>
                          ))}
                      </View>
                    )}
                  </View>
                </View>
              ))}
            </View>
          )}
        </View>

        {/* --------------------------------------------------------------------Skills--------------------------------------------------------------------------- */}

        <View wrap={false}>
          {skills && skills.length > 0 && (
            <View>
              <Text style={styles.heading}>Skills</Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                {skills.map((keyword, _) => (
                  <Text style={styles.skill} key={keyword}>
                    {keyword.trim()}
                  </Text>
                ))}
              </View>
            </View>
          )}
        </View>

        {/* --------------------------------------------------------------------Awards--------------------------------------------------------------------------- */}

        <View wrap={false}>
          {awards && awards.length > 0 && (
            <View>
              <Text style={styles.heading}>Awards</Text>
              {awards.map((item, index) => (
                <View key={index} style={styles.education}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    {item.title && item.title.length > 0 && (
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Text style={styles.educationTitle}>{item.title}</Text>
                        <View
                          style={{
                            visibility: `${!item.url && "none"}`,
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <Text>&nbsp;|&nbsp;</Text>
                          <Link
                            style={[styles.educationTitle, styles.link]}
                            src={item.url}
                          >
                            Link
                          </Link>
                        </View>
                      </View>
                    )}

                    <View>
                      {item.date && item.date.length > 0 && (
                        <Text style={styles.dim}>
                          {item.date ? item.date : "No Date"}
                        </Text>
                      )}
                    </View>
                  </View>
                  <Text style={styles.institution}>{item.awarder}</Text>

                  <View>
                    {item.summary && item.summary.length > 0 && (
                      <Text style={styles.highlight}>
                        {item.summary.trim()}
                      </Text>
                    )}
                  </View>
                </View>
              ))}
            </View>
          )}
        </View>

        {/* --------------------------------------------------------------------Work--------------------------------------------------------------------------- */}

        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
};

Font.register({
  family: "DM Sans",
  src: "https://fonts.googleapis.com/css2?family=DM+Sans&display=swap",
});
Font.register({
  family: "Inter",
  src: "https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400&display=swap",
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    fontFamily: "Inter",
  },
  link: {
    textDecoration: "none",
    color: "#000",
    borderBottom: "1px solid #264653",
    cursor: "pointer",
  },
  dim: {
    fontSize: "12",
    opacity: "0.5",
  },
  header: {
    display: "flex",
    flexDirection: "row",
  },
  profilePhoto: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginBottom: 20,
    marginRight: 20,
    objectFit: "cover",
  },
  name: {
    fontFamily: "DM Sans",
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: "bold",
    opacity: 0.5,
  },
  social: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  socialItem: {
    fontSize: 12,
    opacity: 0.8,
    borderBottom: "1px solid #e9c46a",
    padding: "0 0 4px",
  },
  summary: {
    fontSize: "12px",
    fontFamily: "DM Sans",
    fontWeight: "100",
    marginBottom: "8px",
    lineHeight: "1.2",
    opacity: "0.7",
  },
  heading: {
    fontSize: "18px",
    fontFamily: "DM Sans",
    fontWeight: "bold",
    margin: "8px 0px",
    borderBottom: "1px solid #e9c46a",
    padding: "0 0 4px",
  },
  education: {
    margin: "4px 0px",
  },
  institution: {
    fontSize: "13px",
    fontWeight: "light",
  },
  educationTitle: {
    fontSize: "16px",
    fontFamily: "DM Sans",
    fontWeight: "bold",
  },
  highlight: {
    fontSize: "12px",
    opacity: "0.7",
    fontWeight: "bold",
  },
  keyword: {
    fontSize: "10px",
    margin: "4px 4px 2px 4px",
    padding: "3px",
    backgroundColor: "#f1f1f1",
    color: "#000",
    borderRadius: "20px",
  },
  skill: {
    fontSize: "12px",
    margin: "4px 4px 2px 4px",
    padding: "3px",
    backgroundColor: "#e9c46a",
    color: "#000",
  },

  // Default
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "DM Sans",
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: "DM Sans",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

// ReactPDF.render(<Quixote />);
export default Quixote;
