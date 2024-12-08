import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GooglePubsubLiteTopicArgsPartitionConfigCapacity {
  publish_mib_per_sec: number;
  subscribe_mib_per_sec: number;
}

export interface GooglePubsubLiteTopicArgsPartitionConfig {
  count: number;
  capacity?: GooglePubsubLiteTopicArgsPartitionConfigCapacity;
}

export interface GooglePubsubLiteTopicArgsReservationConfig {
  throughput_reservation?: string;
}

export interface GooglePubsubLiteTopicArgsRetentionConfig {
  per_partition_bytes: string;
  period?: string;
}

export interface GooglePubsubLiteTopicArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GooglePubsubLiteTopicArgs {
  name: string;
  region?: string;
  zone?: string;
  partition_config?: GooglePubsubLiteTopicArgsPartitionConfig;
  reservation_config?: GooglePubsubLiteTopicArgsReservationConfig;
  retention_config?: GooglePubsubLiteTopicArgsRetentionConfig;
  timeouts?: GooglePubsubLiteTopicArgsTimeouts;
}

export class google_pubsub_lite_topic extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GooglePubsubLiteTopicArgs) {
    const meta = {partition_config:{isBlock:true,capacity:{isBlock:true}},reservation_config:{isBlock:true},retention_config:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_pubsub_lite_topic", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
