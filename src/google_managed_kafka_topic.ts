import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleManagedKafkaTopicArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleManagedKafkaTopicArgs {
  cluster: string;
  configs?: { [key: string]: string };
  location: string;
  partition_count?: number;
  replication_factor: number;
  topic_id: string;
  timeouts?: GoogleManagedKafkaTopicArgsTimeouts;
}

export class google_managed_kafka_topic extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleManagedKafkaTopicArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_managed_kafka_topic", resourceName);
  }

  get cluster(): string {
    return `${this.resourceType}.${this.resourceName}.cluster`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get replication_factor(): string {
    return `${this.resourceType}.${this.resourceName}.replication_factor`;
  }

  get topic_id(): string {
    return `${this.resourceType}.${this.resourceName}.topic_id`;
  }
}
