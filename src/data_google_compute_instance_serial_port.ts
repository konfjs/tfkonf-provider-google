import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleComputeInstanceSerialPortArgs {
  instance: string;
  port: number;
}

export class data_google_compute_instance_serial_port extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleComputeInstanceSerialPortArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_compute_instance_serial_port", resourceName);
  }

  get contents(): string {
    return `data.${this.resourceType}.${this.resourceName}.contents`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instance(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance`;
  }

  get port(): string {
    return `data.${this.resourceType}.${this.resourceName}.port`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }

  get zone(): string {
    return `data.${this.resourceType}.${this.resourceName}.zone`;
  }
}
