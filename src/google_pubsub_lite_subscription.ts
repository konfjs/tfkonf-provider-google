import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GooglePubsubLiteSubscriptionArgsDeliveryConfig {
  delivery_requirement: string;
}

export interface GooglePubsubLiteSubscriptionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GooglePubsubLiteSubscriptionArgs {
  name: string;
  region?: string;
  topic: string;
  zone?: string;
  delivery_config?: GooglePubsubLiteSubscriptionArgsDeliveryConfig;
  timeouts?: GooglePubsubLiteSubscriptionArgsTimeouts;
}

export class google_pubsub_lite_subscription extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GooglePubsubLiteSubscriptionArgs) {
    const meta = {delivery_config:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_pubsub_lite_subscription", resourceName);
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

  get topic(): string {
    return `${this.resourceType}.${this.resourceName}.topic`;
  }
}
