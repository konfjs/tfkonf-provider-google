import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GooglePubsubLiteReservationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GooglePubsubLiteReservationArgs {
  name: string;
  region?: string;
  throughput_capacity: number;
  timeouts?: GooglePubsubLiteReservationArgsTimeouts;
}

export class google_pubsub_lite_reservation extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GooglePubsubLiteReservationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_pubsub_lite_reservation", resourceName);
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

  get throughput_capacity(): string {
    return `${this.resourceType}.${this.resourceName}.throughput_capacity`;
  }
}
