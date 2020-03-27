# Security

## Data Hosting and Storage

Droplr services and data are hosted in Amazon Web Services (AWS) facilities (us-west-2) in the USA.

## Failover and Disaster Recovery

Droplr was built with disaster recovery in mind. All of our infrastructure are spread across 3 AWS availability zones and will continue to work should any one of those data centers fail.

## Virtual Private Cloud

All of our servers are within our own virtual private cloud (VPC) with network access control lists (ACLs) that prevent unauthorized requests getting to our internal network.

## Back Ups and Monitoring

Droplr makes snapshot-based backups of datastores that contain customer and drops data. Backups are stored in at least two geographically separated locations. We produce audit logs for all activity and use ELK stack and Google BigQuery for log and abuse analysis. AWS S3 is used for archival purposes.

## Permissions and Authentication

- Access to customer data is limited to authorized employees who require it for their job.
- Droplr is served over https and runs a zero-trust corporate network. There are no corporate resources or additional privileges from being on Droplr's network.

## Encryption

- All data sent to or from Droplr is encrypted in transit using 256 bit encryption.
- Our API and application endpoints are TLS/SSL and score an “A” rating on Qualys SSL Labs‘ tests. This means we only use strong cipher suites.

## Incident Response

Droplr implements a protocol for handling security events which includes escalation procedures, rapid mitigation and post mortem. All employees are informed of our policies.